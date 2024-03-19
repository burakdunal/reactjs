import React from "react";
import classes from '../ShowResult/ShowResult.module.css';

const ShowList = (props) => {
    return (
        <table className={classes.result}>
            <thead>
                <tr>
                <th>Id</th>
                <th>Başlık</th>
                <th>Onay</th>
                </tr>
            </thead>
            <tbody>
                {props.blogs.map(blog => (
                <tr key={blog.id}>
                    <td>{blog.id}</td>
                    <td>{blog.baslik}</td>
                    <td>{blog.anasayfa ? "Evet" : "Hayır"}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ShowList;