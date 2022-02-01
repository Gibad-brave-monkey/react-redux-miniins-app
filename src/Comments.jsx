
function Comments(props) {
  console.log('comments props', props);

  return (
    <div className="card-comments">
      <form className="comments-item-create">
        <input type="text" />
        <input type="submit" hidden />
      </form>
      <SingleComments/>
    </div>
  )
}