import React, { useEffect, useState } from "react";
import {
  Add,
  Apps,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  Inbox,
  InsertComment,
} from "@mui/icons-material";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import db from "./../firebase";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [{ user }] = useStateValue();

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      <SidebarOption title="Threads" Icon={InsertComment} />
      <SidebarOption title="Instagram" />
      <SidebarOption Icon={Inbox} title="Mentioned" />
      <SidebarOption Icon={Drafts} title="Saved" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} title="Add Channel" addChannelOption />
      {channels.map((channel) => (
        <SidebarOption title={channel.name} key={channel.id} id={channel.id} />
      ))}
    </div>
  );
};

export default Sidebar;
