import { FaStar } from "react-icons/fa";
import leftArrow from "../assets/icons/left-arrow.png";
import { User } from "../utils/apiUtils";
import avatar from "../assets/avatar-1.png"
import "../styles/UserDetails.scss";
import { useEffect, useState } from "react";
import { getUserStore, setUserStore, Store } from "../utils/localStore.ts";

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  const [store, setStore] = useState<Store | null>(null);

  useEffect(() => {
    try {
      setUserStore();
      const store = getUserStore();
      if (store) {
        setStore(store);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="user-details-container">
      <div>
        <p>
          <img src={leftArrow} alt="back" />
          Back to users
        </p>
      </div>

      <div className="actions-bar">
        <h2>User Details</h2>
        <div className="end">
          <button className="btn-delete">Blacklist User</button>
          <button className="btn-primary">Activate User</button>
        </div>
      </div>

      <div>
        <div className="flex avatar-bar">
          <div className="first">
            <img src={avatar} alt="avatar" />
            <div>
              <h3>{user.fullname}</h3>
              <p>{store?.hash}</p>
            </div>
          </div>
          <div className="mid">
            <p>User's tier</p>
            <div className="flex">
              <FaStar color="yellow" fill="" />
            </div>
          </div>
          <div>
            <h3>{user.savings}</h3>
            <p>123456783456/Polaris Bank</p>
          </div>
        </div>
        <div className="tab-navigation">
          <ul>
            <li>
              <a href="#" className="active">
                General Details
              </a>
            </li>
            <li>
              <a href="#">Documents</a>
            </li>
            <li>
              <a href="#">Bank Details</a>
            </li>
            <li>
              <a href="#">Loans</a>
            </li>
            <li>
              <a href="#">Savings</a>
            </li>
            <li>
              <a href="#">App and System</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="info-row">
        <h4>Personal Information</h4>
        <div className="flex">
          <div className="col">
            <p className="important-text">Full name</p>
            <h5>{user.fullname}</h5>
          </div>
          <div className="col">
            <p className="important-text">Phone number</p>
            <h5>{user.phone_no}</h5>
          </div>
          <div className="col">
            <p className="important-text">Email address</p>
            <h5>{user.email}</h5>
          </div>
          <div className="col">
            <p className="important-text">BVN</p>
            <h5>123450987642</h5>
          </div>
          <div className="col">
            <p className="important-text">Gender</p>
            <h5>{store?.gender}</h5>
          </div>
          <div className="col">
            <p className="important-text">Marital status</p>
            <h5>{store?.married ? "Married" : "Single"}</h5>
          </div>
          <div className="col">
            <p className="important-text">Children</p>
            <h5>{store?.hasChildren ? "Yes" : "No"}</h5>
          </div>
          <div className="col">
            <p className="important-text">Type of Residence</p>
            <h5>{store?.residence}</h5>
          </div>
        </div>
      </div>

      <div className="info-row">
        <h4>Education and Employment</h4>
        <div className="flex">
          <div className="col">
            <p className="important-text">Level of education</p>
            <h5>B.Sc</h5>
          </div>
          <div className="col">
            <p className="important-text">Employment Status</p>
            <h5>{store?.employed ? "Employed" : "Unemployed"}</h5>
          </div>
          <div className="col">
            <p className="important-text">Sector of Employment</p>
            <h5>{store?.employmentSector}</h5>
          </div>
          <div className="col">
            <p className="important-text">Duration of Employment</p>
            <h5>{store?.employedFor} years</h5>
          </div>
          <div className="col">
            <p className="important-text">Office Email</p>
            <h5>{user.email}</h5>
          </div>
          <div className="col">
            <p className="important-text">Monthly Income</p>
            <h5>{user.savings}</h5>
          </div>
          <div className="col">
            <p className="important-text">Loan Repayment</p>
            <h5>{user.loan_amount}</h5>
          </div>
        </div>
      </div>

      <div className="info-row">
        <h4>Socials</h4>
        <div className="flex">
          <div className="col">
            <p className="important-text">Twitter</p>
            <h5>{`@${user.fullname.replace(" ", "_")}`}</h5>
          </div>
          <div className="col">
            <p className="important-text">Facebook</p>
            <h5>{user.fullname}</h5>
          </div>
          <div className="col">
            <p className="important-text">Instagram</p>
            <h5>{user.fullname}</h5>
          </div>
        </div>
      </div>

      <div className="info-row">
        <h4>Guarantor</h4>
        <div className="flex">
          {store?.guarantors.map((guarantor, index) => (
            <div className="col" key={index}>
              <p className="important-text">Full name</p>
              <h5>{guarantor.fullname}</h5>
              <p className="important-text">Phone number</p>
              <h5>{guarantor.phone_no}</h5>
              <p className="important-text">Email address</p>
              <h5>{guarantor.email}</h5>
              <p className="important-text">Relationship</p>
              <h5>{guarantor.rel}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;