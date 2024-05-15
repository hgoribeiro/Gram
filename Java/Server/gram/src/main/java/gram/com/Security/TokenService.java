package gram.com.Security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

import gram.com.Model.User;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    @Value("${api.security.token.secret}")
    private String JWTsecret;

    public String generatedToken(User user) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(JWTsecret);
            String token = JWT.create()
                    .withIssuer("AuthController")
                    .withSubject(user.getEmail())
                    .withExpiresAt(getExpireTime())
                    .sign(algorithm);
            return token;
        }

        catch (JWTCreationException ex) {
            throw new RuntimeException("Error While Generate a token", ex);
        }

    }

    public String ValidateToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(JWTsecret);
            return JWT.require(algorithm)
                    .withIssuer("AuthController")
                    .build()
                    .verify(token)
                    .getSubject();
        }

        catch (JWTVerificationException ex) {
            return "";
        }

    }


    private Instant getExpireTime() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}
