import './blogsGrid.css';

import BlogImage from '../../assets/img/blog_img.png'

const BlogsGrid = () => {
  return (
    <section className="blogs_section">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="blogs_item">
                        <div className="blogs_img">
                            <img src={BlogImage} alt="" />
                        </div>
                        <div className="blogs_content">
                            <h5 className="blog_title">CVE-2020-1234 and how this influences your whatever</h5>
                            <a href="#" className="blog_link arrow-link">Read more</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="blogs_item">
                        <div className="blogs_img">
                            <img src={BlogImage} alt="" />
                        </div>
                        <div className="blogs_content">
                            <h5 className="blog_title">CVE-2020-1234 and how this influences your whatever</h5>
                            <a href="#" className="blog_link arrow-link">Read more</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="blogs_item">
                        <div className="blogs_img">
                            <img src={BlogImage} alt="" />
                        </div>
                        <div className="blogs_content">
                            <h5 className="blog_title">CVE-2020-1234 and how this influences your whatever</h5>
                            <a href="#" className="blog_link arrow-link">Read more</a>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <p className="blog_read-more">Want to read more and keep updated at all times? <a href="#" className="blog_rad-more-link">Visit the blog</a></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogsGrid