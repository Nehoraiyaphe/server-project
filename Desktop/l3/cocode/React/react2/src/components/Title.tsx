interface Props {
  name: string;
}

const Title = (props: Props) => {
  return <h1>{props.name}</h1>;
};

export default Title;
