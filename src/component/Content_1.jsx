import React from 'react'
import "./Content_1.css"
import  img_search from "../assets/media/search.png"
const Content_1 = () => {
  return (
    <div>
      <div className="contents">
    <p className='content'>The most affortable place to stay in the san franciso bay area</p>
    <p><img src="https://s3-alpha-sig.figma.com/img/4ba3/951e/c6472c41b4a12ea91fbfdf1b29d21a18?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dCgTGl3NZHXpoauwYbwPgkYrYXwzG5kv6nY0rZJQhX9EBYghOIBCU4xFOYR6LwPqR21lAYbanYo3gRB~LJUveOfnvVEAPdw28n7NPmMgVZ4WY6vMOz3-FBABNzuvtIYwcE4Fc~lbMX09O8aBCSNBTr6EXc35WHbDxQ8FCcxD8cCg5VjiyUcTVZ8LePUrUETn2yTEiuQQCmhZN0SPdLRn4F5GeSJuTPzsumsLZ4OZB35APQ3krf5ArZah6U~Ma3PXuEWiV3o8MD2hVxNjP1QUZHc0r5fw-mBxz6aYJEZu8snCw65yxVnys8uI8UPAlyE1ZzOMQ2Kr-gMRPaYi6QMBMw__" alt="" width={255} /></p>
    </div>
    <div className="select">
        <select name="All type" id="#">
          <option value="All Type">All Type</option>
        </select>
        <select name="Neighborhood" id="#">
          <option value="Neighborhood">Neighborhood</option>
        </select>
        <img src={img_search} alt="" />
    </div>
    </div>
  )
}

export default Content_1
