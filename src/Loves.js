import React from "react";
import Table from "react-bootstrap/Table";
// npm install --save-dev @iconify/react @iconify/icons-flat-color-icons
import { Icon, InlineIcon } from "@iconify/react";
import likeIcon from "@iconify/icons-flat-color-icons/like";

class Loves extends React.Component {
  clickHandler(event) {
    console.log(this.props.postId);
    this.props.loveaction(this.props.postId);
  }

  render() {
    return (
      <>
        <Table>
          <tbody>
            <tr>
              <td>
                <Icon
                  onClick={() => this.clickHandler()}
                  fluid
                  className="mx-auto"
                  icon={likeIcon}
                  width="25px"
                  alt="love logo"
                />
              </td>
              <td>{this.props.no}</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default Loves;
