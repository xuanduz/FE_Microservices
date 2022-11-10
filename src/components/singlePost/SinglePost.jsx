import React from 'react';
import Comments from '../comments/Comments';
import './singlePost.css';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePost__Wrapper">
                <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" className="singlePost__Wrapper--image" />
                <h1 className="singlePost__Title">
                    Lorem ipsum dolor sit amet consectetur.
                    <div className="singlePost__Edit">
                        <i className="singlePost__Edit--Icon fa-regular fa-pen-to-square"></i>
                        <i className="singlePost__Edit--Icon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePost__Infor">
                    <span className="singlePost__Infor--Author">
                        Author: <b>NXD</b>
                    </span>
                    <span className="singlePost__Infor--Date">
                        Date: <b>12:00:00 30/10/2022</b>
                    </span>
                </div>
                <p className="singlePost__Infor--Content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus, laboriosam pariatur autem deleniti atque quos perferendis dolor aspernatur et esse omnis quaerat nam, veritatis sunt soluta expedita consequuntur, officiis sit ut? Culpa, officia unde impedit tempora nihil saepe dolorum magni est neque aut odio. Sapiente neque hic deleniti asperiores voluptate vero consequuntur voluptas, praesentium nemo? Similique dignissimos quam cumque? Non eaque, veniam a voluptatem sit aspernatur voluptas provident atque corporis impedit ab quia vel nesciunt reprehenderit veritatis repellat esse perferendis facilis recusandae at animi, nulla explicabo! Aperiam qui ducimus quis doloribus incidunt quidem facilis ad ex error, velit itaque voluptate. Voluptate perspiciatis laboriosam esse voluptatum harum numquam, quibusdam placeat a officia maxime sit illum iure quis molestias quisquam autem eos assumenda, in expedita magni? Sunt illum rerum accusantium fugiat, iure impedit tenetur distinctio ipsum repellat, accusamus nesciunt velit explicabo quis esse aperiam eos exercitationem est possimus non dolorum. Enim quas officiis, vero autem tempore corrupti nemo dolores ipsa maxime et tempora quibusdam repellendus illum incidunt sed nulla inventore ipsum! Eligendi adipisci sequi optio veniam, quaerat est soluta dolore reprehenderit amet laudantium quae? Impedit aliquam porro consequuntur tempora laborum consequatur incidunt accusantium, quae assumenda iusto officia rerum officiis natus rem cumque ex, consectetur ipsum delectus eum repudiandae illum pariatur vero! Corporis architecto consequuntur, quidem voluptatibus autem aperiam nemo esse qui, magnam magni sapiente sit harum, incidunt dolorem dicta odio praesentium repellat sunt eligendi beatae distinctio eius dolore! Nihil voluptatibus non dolores, totam voluptatum voluptate deleniti officiis eius voluptatem alias deserunt debitis veniam qui tempora rerum assumenda? Ipsa suscipit nulla ad, ex vel cumque distinctio atque repudiandae debitis molestias praesentium itaque laboriosam, commodi optio architecto maiores reprehenderit quas sed a magnam est ea veniam. Delectus tempore deserunt nulla possimus maiores laborum quas dolorum quidem consequatur corrupti nisi, ea numquam. Non, quasi.
                </p>
                <Comments />
            </div>
        </div>
    )
}
