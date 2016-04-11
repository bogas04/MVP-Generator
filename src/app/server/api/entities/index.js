import config from '../../config';
import sequelize from 'sequelize';

export default function entities (Router , db) {
  return Router()
  .get('/entity.json', (req, res) => { 

    //db.models.entities.findAll({
    //include: [
    //{ model: db.models.ratings, attributes: [ [db.col('value')] ]}
    //]
    //}).then(E => console.log(E));

    //db.query(
    //`SELECT "e"."id", title, description, phone, email, cover_photo,
    //profile_photo, location, "e"."createdAt", "e"."updatedAt", "r"."avg_rating"
    //FROM entities as e, ( SELECT AVG(value) as avg_rating, "ratings"."entityId" FROM ratings GROUP BY "ratings"."entityId" ) as r
    //WHERE "e"."id" = "ratings"."entityId"
    //ORDER BY "r"."avg_rating"`
    //)

    let clause = {};

    const { id = null, q = null, recent = null } = req.query;

    if (id) { clause = entityBy({ id }); }
    else if (q) { clause = entityBy({ q }); }
    else if (recent) { clause = entityBy({ recent: recent !== 0 ? recent: 7*24*60*60*1000 }) } // recent by 1 week by default

    db.models.entities.findAll(clause)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  });
}

const entityBy = type => {
  const key = Object.keys(type)[0];

  const clauseCreators = {
    id: id => ({ where: { id, }, }),
      q: q => ({ where: { title: { $like: `%${q}%` }, }, }),
        recent: by => ({ where: { createdAt: { $gt: new Date(new Date() - by) } } })
  };

  return clauseCreators[key](type[key]);
}
