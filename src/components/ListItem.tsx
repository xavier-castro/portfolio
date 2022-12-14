type ListItemProps = {
  name: string
  email: string
}

export const ListItem: React.FC<ListItemProps> = ({ name, email }) => {
  return (
    <div className="bg-gradient-to-r from-white to-fuchsia-100 rounded-lg border-slate-300 shadow-slate-100">
      <ul role="list" className="p-3 divide-y divide-slate-200">
        <li className="py-4 first:pt-0 last:pb-0">


          <div className="flex items-center space-x-4">
            <div className="flex-none items-center justify-items-center border-red-300 border-2">
              <div className="shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src="data:image/jpeg;base64,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"
                  alt=""
                  />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-medium text-slate-900">{name}</p>
                <p className="text-sm text-slate-500 truncate">{email}</p>
              </div>
            </div>


            <div className="flex-1" />


            <div className="flex-none divide-indigo-100 place-content-stretch items-stretch content-between rounded-lg">
              <div className="bg-red-200 flex-grow">
                <h1>1</h1>
              </div>
              <div className="bg-purple-200 flex-grow">
                <h1>2</h1>
              </div>
              <div className="bg-green-200 flex-grow">
                <h1>3</h1>
              </div>
            </div>


          </div>
        </li>
      </ul>
    </div>
  )
}
