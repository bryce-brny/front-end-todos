import React from "react";
import { Link } from "react-router-dom";

export default function JobItem(props) {
  const { job } = props;
  return (
    <div className="collapse w-full rounded gap-1 my-1">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        {job.title}
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <div className="flex justify-around mt-3">
          <p>Remaining day: {job.remainDay}</p>
          <p>Due date: {job.dueDate}</p>
          <p>Status: {job.status ? "Done" : "OnGoing"}</p>
          <div className="w-20">
            <Link className="btn btn-circle" to={`/updatetodo/${job.id}`}>
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
