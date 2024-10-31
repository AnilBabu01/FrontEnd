import React, { useEffect } from "react";
import Sidebar from "@/components/Admin/Sidebar/index";
import Button from "@/components/common/Button/index";
import Head from "next/head";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

const Index = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable({
        responsive: true,
      });
    });

    return () => {
      if ($.fn.dataTable.isDataTable("#example")) {
        $("#example").DataTable().destroy(true);
      }
    };
  }, []);
  return (
    <>
      <Head>
        <title>Users | Mighty Jackpot</title>
      </Head>
      <Sidebar>
        <div className="bg-white border  shadow-lg md:p-2 p-2 rounded-lg md:mt-4 mt-2 ">
          <p className="text-black font-bold">User List</p>
          <div className="scrollable-table">
            <table id="example" className="display" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Amount</th>
                  <th>Join date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Anil</td>
                  <td>7505786956</td>
                  <td>anilb9850@gmail.com</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>
                    <span className="flex-action">
                      <Button title="Delete" styles="delete" />
                      <Button title="Edit" styles="edit" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Index;
