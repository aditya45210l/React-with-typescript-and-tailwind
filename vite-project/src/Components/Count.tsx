import { useActionState } from "react";

const incremet = (prevsState, formStaus) => {
  console.log(formStaus.get("name"));
  return prevsState + 1;
};

export default function Count() {
  const [state, action] = useActionState(incremet, 0);
  return (
    <div>
      <form>
        <h2 className="text-2xl">{state}</h2>
        <input type="text" name="name" placeholder="Enter you name" />

        <button type="submit" formAction={action}>submit</button>
      </form>
    </div>
  );
}
