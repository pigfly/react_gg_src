const CharacterLimit = ({ limit }: { limit: number }) => {
  const updateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    if (text.length >= limit) {
      alert('hmmm');
    }
  };

  return (
    <>
      <section>
        <h1>Character Limit</h1>
        <input
          placeholder="Enter some text"
          onChange={(event) => updateHandler(event)}
        />
      </section>
    </>
  );
};

export default CharacterLimit;
