import * as React from 'react';

function HomeComponent(props: { firstProp: number, secondProps : string }) {

  return (

      <div>

          { props.firstProp }

      </div>

  )

}


type TMyType<T> = T extends React.ComponentType<infer R> ? R : never; 

type t = TMyType<typeof HomeComponent>;