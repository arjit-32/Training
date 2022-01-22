const ListItem = (props) => {
  return (
    <ul>
      {props.tasks.map((t) => (
        <li key={t.id} onClick={() => props.onDeletingTask(t.id)}>
          {t.task}
        </li>
      ))}
    </ul>
  );
};
export default ListItem;
