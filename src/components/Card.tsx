type CardProps = {
  title: string
}

const Card: React.FC<CardProps> = ({ title }) => {
  return <>{title}</>
}

export default Card
