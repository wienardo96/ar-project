import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="arjs-loader">
        <div>Loading, please wait...</div>
      </div>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        {/* <!-- we use cors proxy to avoid cross-origin problems --> */}
        <a-nft
          type="nft"
          url="./assets/download"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity
            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            scale="5 5 5"
            position="50 150 0"
          ></a-entity>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
