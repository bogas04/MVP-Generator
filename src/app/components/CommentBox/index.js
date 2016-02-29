import React from 'react';
import styles from './styles';

export default function CommentBox ({  }) {
  return (
    <div className="CommentBox" style={styles.wrapper}>
      <textarea style={styles.textarea} placeholder="Enter your comment" rows="4"></textarea>
      <button>Comment</button>
    </div>
  );
};
