package gram.com.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import gram.com.Model.User;
import gram.com.Model.DTOs.Responses.UserDTOResponse;
import gram.com.Repository.UserRepository;

@Service
public class GramService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    UserDetails user;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username);
    }

    public User findByLoginOrEmail(String login, String email) {
        return (userRepository.findByLoginOrEmail(login, email));

    }

    public User findByLogin(String username)  {
        return userRepository.findByLogin(username);
        
    }

    public void addUser(User user) {
        userRepository.save(user);
    }

}
