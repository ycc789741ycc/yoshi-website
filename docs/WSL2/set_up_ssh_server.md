---
sidebar_position: 2
---

# Set up SSH server

`ref`: [https://www.youtube.com/watch?v=w9sAmFyAE_E&t=496s](https://www.youtube.com/watch?v=w9sAmFyAE_E&t=496s)

## Connect SSH server with public key from client side

### Copy the client’s public key to server

(client console)

```bash
scp -P <server port> source <server name>@<server ip address>:~/.ssh/mypub.pub
```

### Add into authorized keys

```bash
cd ~/.ssh
cat mypub.pub >> authorized_keys
```

### Change the permission level (Important for both server and client side)

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/*
```

### Set SSH daemon configuration

```bash
cd /etc/ssh
sudo nano sshd_config
```

```bash
Port <ssh daemon port number>
AuthorizedKeysFile /home/<username>/.ssh/authorized_keys
PasswordAuthentication no
```

## Check SSH status

```bash
sudo service ssh status
```

## Set up SSH server

```bash
sudo service ssh start
```

## Close SSH server

```bash
sudo service ssh stop
```