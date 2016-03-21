Zomato For Everything
==
You might have observed that these days a lot of startups are essentially search engines around some entity. For example:

Zomato - Search engine of restaurants with users who can rate, comment, post pictures of each.
Oyo - Search engine of rooms with users who can rate, comment, post pictures of each room.
Housing - Search engine of rental flats, paying guest rooms etc with users who can rate, comment, post pictures etc.
Policy Bazar - Search engine of policies with again rating, commenting system.

Some new ones have opened up that help you search for wedding locations, find doctors, lawyers, house maids etc.

I guess you can already see a patten in all these startups, everything is same just that the entity that is being searched
varies in their schema, the user system, searching and sorting however remains the same and consistent through out.

Since a patten is observed, it can be automated to reduce software development time.

Goals
==
So the idea is to write a meta-programming application/generator which would take in the structure of the entity and would generate code which
would create a database
* output code that would be the server side code with an API
* create web application that would consume the above API
* create mobile applications that consume the above API

With this, if someone gets an idea to create a startup around some entity and look for investment,
the person can simply use this generator and have a Minimum Viable Product in hand on day one.
Later on, a technical team can work on the same or maybe just use the generated apps as prototype to build the finished product.
Our goal would be to make everything so modular that any team can simply replace our modules with their own and work on top of our generated code.

Todo
==
* [ ] Create Zomato (skeleton - Phase 1)
  * [ ] Create website using React (70%)
    * [x] Create a simple backend using firebase or raw .jsons
    * [ ] Create auth system (both with and without sessions) (10%)
  * [ ] Create different visual styles using different CSS files
  * [ ] Create iOS and Android apps using React-Native
* [ ] Generator (main innovation - Phase 2)
  * [ ] Abstract out details as much as possible
    * [ ] Write small pluggable modules for each functionality so that they can be replaced easily by user
  * [ ] Create an engine to generate schema migrations using knex based on the given input
  * [ ] Create a generator for API based on above schema
  * [ ] Refine it as much as possible with several use cases
