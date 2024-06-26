package gram.com.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import gram.com.Model.User;

public interface UserRepository extends JpaRepository<User, String> {
    UserDetails findByEmail(String email);

    User findByLoginOrEmail(String login, String email);

    User findByLogin(String username);
}
