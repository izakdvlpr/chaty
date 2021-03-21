import chalk from 'chalk';
import { format } from 'date-fns';

const timestamp = `<${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}>`;

interface LogOptions {
  tags: string[];
  color?: string;
  bg?: string;
}

export class LoggerUtils {
  static log(
    ctx: string,
    { tags = [], color = 'green', bg = 'bgGreen' }: LogOptions,
  ) {
    console.log(
      ...tags.map(t => {
        const tag = chalk[color](`[${t}]`);

        return `${chalk[color](timestamp)} ${chalk[bg]('[LOG]')} ${tag}`;
      }),
      chalk[color](ctx),
    );
  }

  static error(
    ctx: string,
    { tags = [], color = 'red', bg = 'bgRed' }: LogOptions,
  ): void {
    console.log(
      ...tags.map(t => {
        const tag = chalk[color](`[${t}]`);

        return `${chalk[color](timestamp)} ${chalk[bg]('[ERROR]')} ${tag}`;
      }),
      chalk[color](ctx),
    );
  }

  static warn(
    ctx: string,
    { tags = [], color = 'yellow', bg = 'bgYellow' }: LogOptions,
  ): void {
    console.log(
      ...tags.map(t => {
        const tag = chalk[color](`[${t}]`);

        return `${chalk[color](timestamp)} ${chalk[bg]('[WARN]')} ${tag}`;
      }),
      chalk[color](ctx),
    );
  }
}
