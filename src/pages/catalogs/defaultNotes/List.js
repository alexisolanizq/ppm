import React from 'react';

import Card from './Card';

const List = ({ defaultNotes, setDefaultNote }) => (
  <div className="p-3 defaultNotes">
    {defaultNotes.map((defaultNote) => (
      <Card
        key={defaultNote.id}
        defaultNote={defaultNote}
        setDefaultNote={setDefaultNote}
      />
    ))}
  </div>
);
List.defaultProps = {
  defaultNotes: []
};

export default List;
