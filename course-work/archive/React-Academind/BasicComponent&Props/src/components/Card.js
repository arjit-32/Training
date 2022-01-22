function Card(props) {
  return (
    <div>
      <img src={props.img} />
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
