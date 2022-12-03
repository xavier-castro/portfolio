type CardProps = {
  title: string
  info: string
}

const Card: React.FC<CardProps> = ({ title, info }) => {
  return (
    <>
      <div className="p-16 flex justify-center items-center bg-pink-500 h-80 mb-6 rounded-lg mx-auto flex-col">
        <div>
          <h1 className="prose prose-h1 text-6xl mb-4">{title}</h1>
        </div>
        <div>
          <p>{info}</p>
        </div>
      </div>
    </>
  )
}

export default Card
