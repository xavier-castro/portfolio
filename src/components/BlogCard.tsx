const BlogCard = props => {
  const {
    title,
    description,
    image,
    link,
    category,
    authorLink,
    key,
    authorImgUrl,
    authorName
  } = props
  return (
    <>
      <div
        key={key}
        className="flex flex-col overflow-hidden rounded-lg shadow-lg"
      >
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={image} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-cyan-600">
              <a href={link} className="hover:underline">
                {category}
              </a>
            </p>
            <a href={link} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{title}</p>
              <p className="mt-3 text-base text-gray-500">{description}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href={authorImgUrl}>
                <img
                  className="h-10 w-10 rounded-full"
                  src={authorImgUrl}
                  alt={authorName}
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href={authorLink} className="hover:underline">
                  {authorName}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                // <time dateTime={post.datetime}>{post.date}</time>
                // <span aria-hidden="true">&middot;</span>
                // <span>{post.readingLength} read</span>
                // // // //{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard
