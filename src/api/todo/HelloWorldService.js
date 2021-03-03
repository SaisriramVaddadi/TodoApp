import axios from 'axios';

 class HelloWorldService  {

    executeHelloWorldService(){
        return axios.get("http://localhost:8080/helloworld/")
    }

    executeHelloWorldBeanService(){
        return axios.get("http://localhost:8080/helloworld-bean")
    }

    executeHelloWorldPathVariable(name){
        return axios.get(`http://localhost:8080/helloworld/path-variable/${name}`)
    }
}
export default new HelloWorldService();
