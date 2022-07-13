import data from "./data/parts-charlynn.json";
import React, { useState, useMemo } from "react";
import Pagination from "../Pagination";
import "bootstrap/dist/css/bootstrap.css";
import "../../src/style-general.css";

let PageSize = 10;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <div className="col-md-12">
        <span className=" invy-text">
          <p>
            Here is a quick overview of regular components coming from our
            inventory to replace the Eaton Charlynn hydraulic motor units. If
            you have any requirements on these components you can always{" "}
            <a href="./contact-us"> contact us </a> for a quote request.
          </p>
        </span>
      </div>

      <div className="col-md-12">
        <input
          type="text"
          id="myInput"
          // onKeyUp="myFunction()"
          onKeyUp={(event) => {
            setSearchTerm(event.target.value);
          }}
          placeholder="Search for Part Number.."
          title="Type in a name"
        />
        <br />
        <br />
        <table className="my-talbe-sort table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>Reference</th>
              <th>Description</th>
              <th>Replacement</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.Reference.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                }
              })
              .map((item) => {
                return (
                  <tr>
                    <td>{item.Reference}</td>
                    <td>{item.Description}</td>
                    <td>{item.Replacements}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
}
