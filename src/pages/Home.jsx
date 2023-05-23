import { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import { getJobs, getSummary } from "../api/todoApi";
import JobItem from "../components/JobItem";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [summary, setSummary] = useState({});
  const [reload, setReload] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;
    getJobs(token).then((rs) => {
      console.log(rs.data);
      setJobs(rs.data);
    });
    getSummary(token).then((rs) => {
      // console.log(rs.data)
      setSummary(rs.data);
    });
  }, [reload]);

  return (
    <>
      <div className="flex justify-around gap-2 mt-3">
        <SummaryCard title="All Jobs" amount={summary.all} />
        <SummaryCard title="Ongoing Jobs" amount={summary.unDone} />
        <SummaryCard title="Jobs Done" amount={summary.done} />
      </div>
      <div className="w-2/3 mx-auto mt-5">
        {jobs.length > 0 ? (
          jobs.map((el) => (
            <JobItem key={el.id} job={el} setReload={setReload} />
          ))
        ) : (
          <p className="text-center text-xl">No Job</p>
        )}
      </div>
    </>
  );
}
