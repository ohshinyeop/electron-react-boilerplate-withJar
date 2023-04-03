import { exec } from 'child_process';

export const runJar = () => {
  console.log('Running jar');
  const server = './example.jar';
  const serverProcess = exec(
    `java -jar ${server} output.log`,
    function (error: any, stdout: any, stderr: any) {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);

      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    }
  );
  if (serverProcess.pid) {
    console.log(`Server PID: ${serverProcess.pid}`);
  } else {
    console.log('Failed to launch server process.');
  }
};
