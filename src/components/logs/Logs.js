import React, { useEffect } from "react";
import Preloader from "../layouts/Preloader";
import LogItem from "./LogItem";
import { connect } from "react-redux";
import { GetLogs } from "../../actions/logActions";
const Logs = ({ log: { logs, loading } }) => {
  useEffect(() => {
    GetLogs();

    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { GetLogs })(Logs);
