type StateInspectorProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const StateInspector = (props: StateInspectorProps) => {
  return (
    <>
      <h1>{props.title}</h1>

      {props.children}
    </>
  );
};
