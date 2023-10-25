import { NewTask } from "./NewTask";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  let content;

  if (tasks.length === 0) {
    content = (
      <p className="text-stone-800 my-4">
        This project does not have any tasks yet.
      </p>
    );
  } else {
    content = tasks.map((task) => {
      return (
        <li key={task.id} className="flex justify-between my-4">
          <span>{task.text}</span>
          <button className="text-stone-799 hover:text-red-500">Clear</button>
        </li>
      );
    });
  }

  console.log(content);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      NEW TASKS
      <NewTask onAdd={onAdd} />
      <ul className="p-4 mt-8 rounded-md bg-stone-100">{content}</ul>
    </section>
  );
};

export { Tasks };
