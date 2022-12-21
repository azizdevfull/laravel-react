import React, { useState } from "react";
import { Link } from "react-router-dom";

function EditCategory() {

    const [categoryInput, setCategory] = useState([]);

    useEffect(() => {
      
    
      return () => {
        
      }
    }, [])
    
    
    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name]: e.target.value});
    }

    return (
        <div className="conatiner px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Edit Category 
                        <Link to="/admin/view-category" className="btn btn-primary btn-sm float-end">Back</Link>
                    </h4>
                </div>
                <div className="card-body">

    <form>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="seo-tags-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="seo-tags" aria-selected="false">SEO Tags</button>
        </li>
    </ul>
    
    <div className="tab-content" id="myTabContent">
        <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            
            <div className="form-group mb-3">
                <label>Slug</label>
                <input type="text" name="slug" onChange={handleInput} value={categoryInput.slug} className="form-control"placeholder="Slug" />
            </div>

            <div className="form-group mb-3">
                <label>Name</label>
                <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control"placeholder="Name" />
            </div>
            
            <div className="form-group mb-3">
                <label>Description</label>
                <textarea name="description" onChange={handleInput} value={categoryInput.description} className="form-control" placeholder="Description" ></textarea>
            </div>
            
            <div className="form-group mb-3">
                <label>Status</label>
                <input type="checkbox" name="status" onChange={handleInput} value={categoryInput.status} /> Status
            </div>

        </div>
        <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
                
                <div className="form-group mb-3">
                    <label>Meta Title</label>
                    <input type="text" name="meta_title" onChange={handleInput} value={categoryInput.meta_title} className="form-control"placeholder="Name" />
                </div>

                <div className="form-group mb-3">
                    <label>Meta Keywords</label>
                    <textarea name="meta_keyword" onChange={handleInput} value={categoryInput.meta_keyword} className="form-control" placeholder="Description" ></textarea>
                </div>

                <div className="form-group mb-3">
                    <label>Meta Description</label>
                    <textarea name="meta_descrip" onChange={handleInput} value={categoryInput.meta_descrip} className="form-control" placeholder="Description" ></textarea>
                </div>
        </div>
        </div>
        <button type="submit" className="btn btn-primary px-4 float-end">Update</button>
    </form>
    </div>
    </div>
        </div>
    );
}


export default EditCategory;