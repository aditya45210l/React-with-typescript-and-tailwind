
import { Blog } from '../Types'
import { useBlogs } from './Shared/BlogsProvider';
import ArticalCard from './ArticalCard';
interface ArticalListsProps{
    onEdit:(blog:Blog) =>void;

}

const ArticalLists = ({onEdit}:ArticalListsProps) => {
    const {blogs,deleteBlogs} = useBlogs();
  return (
    blogs.length > 0 ?  <div className='w-full sm:max-w-3/4 max-w-full rounded-md p-5 shadow border border-gray-200 h-fit flex flex-col gap-2 mx-auto mt-2'>
        {
            blogs && blogs.map((blog) =>(
                <ArticalCard key={blog.id} article={blog} deleteBlogs={()=> deleteBlogs(blog.id)} onEdit={() =>onEdit(blog)}/>
            ))
        }
    </div>:<div className='flex justify-center items-center mt-40'>
        <h2 className='text-md text-gray-500 '>

        no blog avaliable here.
        </h2>
    </div>
  )
}

export default ArticalLists