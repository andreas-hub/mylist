import * as crypto from 'crypto';
import * as argon2 from 'argon2';

/**
 * Password encrypt, decrypt
 */
class PasswordService {
    private hashingConfig = {
        parallelism: 1,
        memoryCost: 64000, // 64 mb
        timeCost: 3, // number of iterations
    };

    /**
     * Hash a password
     * @param {string} password
     * @return {Promise<string>}
     */
    public async hashPassword(password: string): Promise<string> {
        const salt = crypto.randomBytes(16);
        return await argon2.hash(password, {
            ...this.hashingConfig,
            salt,
        });
    }

    /**
     * Check password against hashed password
     * @param {string} password
     * @param {string} hash
     * @return {Promise<boolean>}
     */
    public async verifyPassword(password: string, hash: string): Promise<boolean> {
        return await argon2.verify(hash, password, this.hashingConfig);
    }
}

export default new PasswordService();
