import chalk from 'chalk';
import moment from 'moment';

const timestamp = `<${moment().format('YYYY-MM-DD HH:mm:ss')}>`;

interface LoggerOptions {
  tags?: string[];
  color?: string;
}

class loggerUtils {
  static log(ctx: string, { tags = [], color = 'blue' }: LoggerOptions) {
    console.log(
      `${chalk.blue(timestamp)} ${chalk.bgBlue('[LOG]')} ${tags
        .map(t => `${chalk.blue(`[${t}]`)}`)
        .join(' ')}:`,
      chalk[color](ctx),
    );
  }

  static error(ctx: string, { tags = [], color = 'red' }: LoggerOptions) {
    console.log(
      `${chalk.red(timestamp)} ${chalk.bgRed('[ERROR]')} ${tags
        .map(t => `${chalk.red(`[${t}]`)}`)
        .join(' ')}:`,
      chalk[color](ctx),
    );
  }

  static warn(ctx: string, { tags = [], color = 'yellow' }: LoggerOptions) {
    console.log(
      `${chalk.yellow(timestamp)} ${chalk.bgYellow('[WARN]')} ${tags
        .map(t => `${chalk.yellow(`[${t}]`)}`)
        .join(' ')}:`,
      chalk[color](ctx),
    );
  }

  static debug(ctx: string, { tags = [], color = 'green' }: LoggerOptions) {
    console.log(
      `${chalk.green(timestamp)} ${chalk.bgGreen('[DEBUG]')} ${tags
        .map(t => `${chalk.green(`[${t}]`)}`)
        .join(' ')}:`,
      chalk[color](ctx),
    );
  }

  static ready(ctx: string, { tags = [], color = 'green' }: LoggerOptions) {
    console.log(
      `${chalk.green(timestamp)} ${chalk.green('[READY]')} ${tags
        .map(t => `${chalk.green(`[${t}]`)}`)
        .join(' ')}:`,
      chalk[color](ctx),
    );
  }
}

export { loggerUtils };
