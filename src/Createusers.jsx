

function Createusers() {
  return (
    <form>
  <div className="mb-3">
    <label  className="form-label">name</label>
    <input type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Email</label>
    
    <input type="email" className="form-control"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Phone</label>
    
    <input type="text" className="form-control"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Createusers