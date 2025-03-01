const Friends = () => {
  const friends = [
    { id: 893, name: 'Lynn' },
    { id: 871, name: 'Alex' },
    { id: 982, name: 'Ben' },
    { id: 61, name: 'Mikenzi' },
  ];

  return (
    <ul>
      {friends.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );

  // return (
  //   <ul>
  //     {friends.map(({ id, name }) => {
  //       return <li key={id}>{name}</li>;
  //     })}
  //   </ul>
  // );
};

export default Friends;
