import React from "react";
import styles from "@/styles/Wishlist.module.css";

const WishlistOptions = ({ options, setOptions }) => {
  return (
    <div className={styles["options-dropdown-con"]}>
      <fieldset>
        <legend>VIEW</legend>
        <div>
          <input
            type="radio"
            id="compact"
            name="view"
            onChange={() =>
              setOptions((prevState) => ({
                ...prevState,
                view: "compact",
              }))
            }
            checked={options.view === "compact"}
          />
          <label for="compact">Compact</label>
        </div>

        <div>
          <input
            type="radio"
            id="expanded"
            name="view"
            onChange={() =>
              setOptions((prevState) => ({
                ...prevState,
                view: "expanded",
              }))
            }
            checked={options.view === "expanded"}
          />
          <label for="expanded">Expanded</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>PLATFORM</legend>
        <div>
          <input
            type="radio"
            id="any"
            name="platform"
            onChange={() =>
              setOptions((prevState) => ({
                ...prevState,
                platform: "any",
              }))
            }
            checked={options.platform === "any"}
          />
          <label for="any">Any</label>
        </div>

        <div>
          <input
            type="radio"
            id="mac"
            name="platform"
            onChange={() =>
              setOptions((prevState) => ({
                ...prevState,
                platform: "mac",
              }))
            }
            checked={options.platform === "mac"}
          />
          <label for="mac">macOS</label>
        </div>

        <div>
          <input
            type="radio"
            id="linux"
            name="platform"
            onChange={() =>
              setOptions((prevState) => ({
                ...prevState,
                platform: "linux",
              }))
            }
            checked={options.platform === "linux"}
          />
          <label for="linux">SteamOS + Linux</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>TYPE</legend>
        <div>
          <input
            type="radio"
            id="all"
            name="type"
            onChange={() =>
              setOptions((prevState) => ({
                ...prevState,
                type: "all",
              }))
            }
            checked={options.type === "all"}
          />
          <label for="all">All Types</label>
        </div>

        <div>
          <input
            type="radio"
            id="games"
            name="type"
            onChange={() =>
              setOptions((prevState) => ({
                ...prevState,
                type: "games",
              }))
            }
            checked={options.type === "games"}
          />
          <label for="games">Games</label>
        </div>

        <div>
          <input
            type="radio"
            id="software"
            name="type"
            onChange={() =>
              setOptions((prevState) => ({
                ...prevState,
                type: "software",
              }))
            }
            checked={options.type === "software"}
          />
          <label for="software">Software</label>
        </div>

        <div>
          <input
            type="radio"
            id="dlc"
            name="type"
            onChange={() =>
              setOptions((prevState) => ({
                ...prevState,
                type: "onChange={ () =>dlc",
              }))
            }
            checked={options.type === "dlc"}
          />
          <label for="dlc">DLC</label>
        </div>

        <div>
          <input
            type="radio"
            id="videos"
            name="type"
            onChange={() =>
              setOptions((prevState) => ({
                ...prevState,
                type: "videos",
              }))
            }
            checked={options.type === "videos"}
          />
          <label for="videos">Videos</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>PRICE</legend>
        <div>
          <input type="checkbox" id="5" name="price" />
          <label for="5">Less than $5.00</label>
        </div>

        <div>
          <input type="checkbox" id="10" name="price" />
          <label for="10">Less than $10.00</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>DISCOUNT</legend>
        <div>
          <input type="checkbox" id="all" name="discount" />
          <label for="all">On Sale</label>
        </div>

        <div>
          <input type="checkbox" id="50" name="discount" />
          <label for="50">50% or more</label>
        </div>

        <div>
          <input type="checkbox" id="75" name="discount" />
          <label for="75">75% or more</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>EXCLUDE</legend>
        <div>
          <input type="checkbox" id="early" name="exclude" />
          <label for="early">Early Access</label>
        </div>

        <div>
          <input type="checkbox" id="pre" name="exclude" />
          <label for="pre">Pre-release</label>
        </div>

        <div>
          <input type="checkbox" id="vr" name="exclude" />
          <label for="vr">VR Only</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>DECK COMPATIBILITY</legend>
        <div>
          <input type="checkbox" id="verified" name="deck" />
          <label for="verified">Verified</label>
        </div>

        <div>
          <input type="checkbox" id="playable" name="deck" />
          <label for="playable">Playable</label>
        </div>
      </fieldset>
    </div>
  );
};

export default WishlistOptions;
