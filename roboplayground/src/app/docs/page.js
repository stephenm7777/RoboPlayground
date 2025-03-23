export default function DocsPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">📚 Documentation</h1>
        <p className="text-gray-700">
          Learn how to use RoboPlayground to load robots, control them, and build awesome projects.
        </p>
  
        <div className="mt-6 space-y-4">
          <section>
            <h2 className="text-xl font-semibold">1. Uploading Your Robot</h2>
            <p>Upload a URDF file with its meshes. Your robot will appear in the 3D simulation.</p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold mt-4">2. Writing Control Code</h2>
            <p>Use the VS Code extension to send movement commands or scripts directly to the robot.</p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold mt-4">3. Running Simulations</h2>
            <p>Run your code, simulate movement, view sensor data, and debug—all in the browser.</p>
          </section>
        </div>
      </div>
    );
  }
  