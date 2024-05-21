import React from "react";
import { Tooltip } from "react-bootstrap";

const UserTooltip = React.forwardRef(({ user }, ref) => (
  <Tooltip ref={ref}>
    <div>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Nom:</strong> {user.firstName} {user.lastName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Téléphone:</strong> {user.phone}
      </p>
      <p>
        <strong>Adresse:</strong> {user.address.address}, {user.address.city}
      </p>
    </div>
  </Tooltip>
));

export default UserTooltip;
