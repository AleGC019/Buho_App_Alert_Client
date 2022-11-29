import classes from './SinglePost.module.scss';

const SinglePost = ({ title = "", description = "", image = "" }) => {
  return (
    <article className={classes["post"]} >
      <h4> {title} </h4>
      <p>
        {description}
      </p>

      <figure>
        <img src={image} alt="Post  Image" />
      </figure>

      <div className={classes["actions"]}>
        <div>
          <MdFavoriteBorder /> 1550 likes
        </div>

        <div>
          <MdBookmarkBorder /> Bookmark
        </div>
      </div>
    </article>
  );
}

export default SinglePost;