import { deletePost, startEditingPost } from 'pages/blog/blog.slice'
import { useAppDispatch } from 'store'
import { Post } from 'types/blog.type'

interface PostItemType {
  post: Post
}

export default function PostItem({ post }: PostItemType) {
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    dispatch(deletePost(post.id))
  }
  const handleStartEditing = () => {
    dispatch(startEditingPost(post.id))
  }
  return (
    <div className='flex flex-col items-center overflow-hidden rounded-lg border md:flex-row'>
      <div className='group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48'>
        <img
          src={post.featuredImage}
          loading='lazy'
          alt='Mọi công việc thành đạt đều nhờ sự kiên trì và lòng say mê.'
          className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        />
      </div>
      <div className='flex flex-col gap-2 p-4 lg:p-6'>
        <span className='text-sm text-gray-400'>{post.publishDate}</span>
        <h2 className='text-xl font-bold text-gray-800'>{post.title}</h2>
        <p className='text-gray-500'>{post.description}</p>
        <div>
          <div className='inline-flex rounded-md shadow-sm' role='group'>
            <button
              type='button'
              onClick={handleStartEditing}
              className='rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            >
              Edit
            </button>
            <button
              type='button'
              className='rounded-r-lg border-t border-b border-r border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
