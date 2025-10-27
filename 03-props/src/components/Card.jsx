function Card(props) {
  const { user } = props;
  console.log(props);
  return (
    <div className="card">
      <h1>{user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}

export default Card;
