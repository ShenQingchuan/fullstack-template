import type { Logger } from 'nestjs-pino'
import process from 'node:process'
import { z } from 'zod'

/**
 * Environment variables schema
 */
const envSchema = z.object({
  HOST: z.string().default('0.0.0.0'),
  PORT: z.coerce.number().int().min(1).max(65535).default(7070),
  NODE_ENV: z
    .enum([
      'development',
      'production',
      'test',
    ])
    .default('development'),
  ENABLE_FILE_LOG: z
    .enum(['true', 'false'])
    .transform(val => val === 'true')
    .default(true),

  // Todo: Define more your environment variables here
})

/**
 * Parse and validate environment variables
 */
export function parseEnv() {
  return envSchema.parse(process.env)
}

/**
 * Safe parse environment variables with error handling
 */
export function safeParseEnv() {
  return envSchema.safeParse(process.env)
}

/**
 * Infer type from schema
 */
export type Env = z.infer<typeof envSchema>

/**
 * Validate environment variables at startup
 * Note: Logger can be passed after NestJS app is initialized.
 * For pre-initialization validation, console.error is used as fallback.
 */
export function validateEnv(logger?: Logger): Env {
  const result = safeParseEnv()

  if (!result.success) {
    const logError = (message: string) => {
      logger ? logger.error(message) : console.error(message)
    }

    logError('❌ Invalid environment variables:')
    result.error.issues.forEach((issue) => {
      logError(`  - ${issue.path.join('.')}: ${issue.message}`)
    })
    process.exit(1)
  }

  return result.data
}
