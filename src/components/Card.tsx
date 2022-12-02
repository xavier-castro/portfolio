type CardProps = {
  title: string
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <>
      <div className="flex justify-center items-center bg-pink-500 h-80 mb-6 rounded-lg">
        {title}
      </div>
    </>
  )
}

export default Card
