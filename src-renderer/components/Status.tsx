import * as React from 'react';

export interface IStatusProps {
  port: number;
}
const Status = (props: IStatusProps) => (<h2>Moscatron Broker listening on port {props.port}</h2>);

export default Status;
