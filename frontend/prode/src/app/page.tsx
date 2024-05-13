"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import authService from "../services/authService";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";

export default function App() {
  
  const [selected, setSelected] = useState("login");
  const [mail, setMail] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const validateEmail = (mail: string) =>
    mail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  return (
    <div className="w-full flex justify-center content-center mt-10">
      <Card className="max-w-full w-[300px] h-[400px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key as string)}
          >
            <Tab key="login" title="Login">
              <form
                className="flex flex-col gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const response = await authService.login(mail, password);
                  if (response.success == true) {
                    Cookies.set("Token", response.data);
                    router.push("/home");
                  } else {
                    setErrorLogin(true);
                  }
                }}
              >
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  isInvalid={errorLogin}
                  variant="bordered"
                  type="Email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  isInvalid={errorLogin}
                  variant="bordered"
                  errorMessage={errorLogin && "Incorrect password or email"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button type="submit" fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form
                className="flex flex-col gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const response = await authService.register(
                    userName,
                    mail,
                    password
                  );
                  const data = await response.json();
                  if (data.success == true) {
                    setSelected("login");
                  } else {
                    setErrorRegister(true);
                  }
                }}
              >
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <Input
                  isRequired
                  value={mail}
                  placeholder="Enter your email"
                  type="email"
                  label="Email"
                  isInvalid={!validateEmail(mail)}
                  errorMessage={!mail && "Please enter a valid email"}
                  onValueChange={setMail}
                  className="max-w-xs"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  errorMessage={errorRegister && "Email en uso"}
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button type="submit" fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
