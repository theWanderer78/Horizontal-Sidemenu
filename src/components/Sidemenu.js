import React from "react";
import "../App.css";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";

function Sidemenu() {
  return (
    <div>
      <div class="sidemenu">
        <ul>
          <li>
            <a href="#">Compute</a>
          </li>
          <li>
            <a href="javascript:vold(0)">Block Storage</a>
            <ul>
              <li>
                <a href="#">Instance</a>
              </li>
              <li>
                <a href="#">Dedicated Virtual Machine Host</a>
              </li>
              <li>
                <a href="#">Instance Configuration</a>
              </li>
              <li>
                <a href="#">Instance Pool</a>
              </li>
              <li>
                <a href="#">Cluster Network</a>
              </li>
              <li>
                <a href="#">Auto scaling Configuration</a>
              </li>
              <li>
                <a href="#">Custom Image</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="javascript:vold(0)">Object Storage</a>
            <ul>
              <li>
                <a href="#">Instance</a>
              </li>
              <li>
                <a href="#">Dedicated Virtual Machine Host</a>
              </li>
              <li>
                <a href="#">Instance Configuration</a>
              </li>
              <li>
                <a href="#">Instance Pool</a>
              </li>
              <li>
                <a href="#">Cluster Network</a>
              </li>
              <li>
                <a href="#">Auto scaling Configuration</a>
              </li>
              <li>
                <a href="#">Custom Image</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:vold(0)">File Storage</a>
            <ul>
              <li>
                <a href="#">Instance</a>
              </li>
              <li>
                <a href="#">Dedicated Virtual Machine Host</a>
              </li>
              <li>
                <a href="#">Instance Configuration</a>
              </li>
              <li>
                <a href="#">Instance Pool</a>
              </li>
              <li>
                <a href="#">Cluster Network</a>
              </li>
              <li>
                <a href="#">Auto scaling Configuration</a>
              </li>
              <li>
                <a href="#">Custom Image</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Networking</a>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Autonomous</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidemenu;
