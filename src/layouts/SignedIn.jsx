import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';

export default function SignedIn({ signOut }) {
  // Problem : eger componentler arasi bir data iletisimi yapiyorsanz
  // Ornek : function SignedIn(signOut) => bu func icinde singOut propuna erismek
  // icin signOut.singOut yazmaniz lazim. Bu garip geliyor cunku orada props yazmasi lazim. yani burada props.signOut seklinde erismeniz gerekir
  // Ama eger benim yaptigim gibi suslu icerisine istediginiz prop adini verirseniz
  // js bunu sizin icin direkt olarak alir ve sizde direkt prop ismini kullanarak
  // islem yapabilirsnz
  // const Header = (props) => <h1> {props.title} </h1>
  // const Header = ({title}) => <h1> {title} </h1>
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://i.pinimg.com/236x/ce/d1/5a/ced15aba811c18406de4d27ec06f381b.jpg"
        />
        <Dropdown pointing="top left" text="Yasemin">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
